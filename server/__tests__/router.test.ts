import { beforeAll, describe, expect, it } from 'bun:test'
import request from 'supertest'
import express from 'express'
import router from 'routes/router'

describe('router', () => {
  const app = express()

  beforeAll(() => {
    app.use('/', router)
  })

  describe('route "/"', async () => {
    let response: request.Response

    beforeAll(async () => {
      response = await request(app).get('/')
    })

    it('responds with 200 OK', async () => {
      expect(response.status).toEqual(200)
    })

    it('responds with JSON', async () => {
      expect(response.headers['content-type']).toBe(
        'application/json; charset=utf-8'
      )
    })

    it('returns an array with items', async () => {
      expect(response.body).toBeArray()
    })

    it('item in array has correct properties', async () => {
      expect(response.body[0]).toHaveProperty('name')
      expect(response.body[0]).toHaveProperty('score')
      expect(response.body[0]).toHaveProperty('previousScore')
      expect(response.body[0]).toHaveProperty('icon')
      expect(response.body[0]).toHaveProperty('benchMark')

      expect(response.body[0].benchMark).toHaveProperty('name')
      expect(response.body[0].benchMark).toHaveProperty('score')
    })
  })
})
