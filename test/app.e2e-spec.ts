import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('API Endpoints (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('User Preferences', () => {
    const userId = 'testUser123';

    it('POST /api/preferences - Create a new user preference', async () => {
      const response = await request(app.getHttpServer())
        .post('/api/preferences')
        .send({
          userId,
          email: 'test@example.com',
          preferences: {
            marketing: true,
            newsletter: false,
            updates: true,
            frequency: 'weekly',
            channels: {
              email: true,
              sms: false,
              push: true,
            },
          },
          timezone: 'America/New_York',
        })
        .expect(201);

      expect(response.body).toEqual(
        expect.objectContaining({
          success: true,
          message: 'User preference created successfully',
          data: expect.objectContaining({
            userId,
            email: 'test@example.com',
            preferences: expect.objectContaining({
              marketing: true,
              newsletter: false,
              updates: true,
              frequency: 'weekly',
              channels: expect.objectContaining({
                email: true,
                sms: false,
                push: true,
              }),
            }),
            timezone: 'America/New_York',
          }),
          timestamp: expect.any(String),
        }),
      );
    });

    it('GET /api/preferences/:userId - Get user preference by userId', async () => {
      const response = await request(app.getHttpServer())
        .get(`/api/preferences/${userId}`)
        .expect(200);

      expect(response.body).toEqual(
        expect.objectContaining({
          success: true,
          message: 'User preference fetched successfully',
          data: expect.objectContaining({
            userId,
            email: 'test@example.com',
            preferences: expect.objectContaining({
              marketing: true,
              newsletter: false,
              updates: true,
              frequency: 'weekly',
              channels: expect.objectContaining({
                email: true,
                sms: false,
                push: true,
              }),
            }),
            timezone: 'America/New_York',
          }),
          timestamp: expect.any(String),
        }),
      );
    });

    it('PATCH /api/preferences/:userId - Update user preference by userId', async () => {
      const response = await request(app.getHttpServer())
        .patch(`/api/preferences/${userId}`)
        .send({
          preferences: {
            newsletter: true,
          },
        })
        .expect(200);

      expect(response.body).toEqual(
        expect.objectContaining({
          success: true,
          message: 'User preference updated successfully',
          data: expect.objectContaining({
            preferences: expect.objectContaining({
              newsletter: true,
            }),
          }),
          timestamp: expect.any(String),
        }),
      );
    });

    it('DELETE /api/preferences/:userId - Delete user preference by userId', async () => {
      const response = await request(app.getHttpServer())
        .delete(`/api/preferences/${userId}`)
        .expect(200);

      expect(response.body).toEqual(
        expect.objectContaining({
          success: true,
          message: 'User preference deleted successfully',
          data: expect.objectContaining({
            deleted: true,
          }),
          timestamp: expect.any(String),
        }),
      );
    });
  });

  describe('Notification Management', () => {
    const userId = 'testUser123';
  
    it('POST /api/notifications/send - Send a notification', async () => {
      const response = await request(app.getHttpServer())
        .post('/api/notifications/send')
        .send({
          userId,
          type: 'marketing',
          channel: 'email',
          content: {
            subject: 'Test Notification',
            body: 'This is a test notification.',
          },
        })
        .expect(201);
  
      expect(response.body).toEqual(
        expect.objectContaining({
          __v: expect.any(Number),
          _id: expect.any(String),
          userId,
          type: 'marketing',
          channel: 'email',
          metadata: expect.objectContaining({
            subject: 'Test Notification',
            body: 'This is a test notification.',
          }),
          status: 'sent',
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
        }),
      );
    });
  
    it('GET /api/notifications/:userId/logs - Get notification logs', async () => {
      const response = await request(app.getHttpServer())
        .get(`/api/notifications/${userId}/logs`)
        .expect(200);
  
      expect(response.body).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            __v: expect.any(Number),
            _id: expect.any(String),
            userId,
            type: 'marketing',
            channel: 'email',
            metadata: expect.objectContaining({
              subject: expect.any(String),
              body: expect.any(String),
            }),
            status: 'sent',
            createdAt: expect.any(String),
            updatedAt: expect.any(String),
          }),
        ]),
      );
    });
  
    it('GET /api/notifications/stats - Get notification stats', async () => {
      const response = await request(app.getHttpServer())
        .get('/api/notifications/stats')
        .expect(200);
  
      expect(response.body).toEqual(
        expect.objectContaining({
          total: expect.any(Number),
          sent: expect.any(Number),
          failed: expect.any(Number),
        }),
      );
    });
  });  
});
