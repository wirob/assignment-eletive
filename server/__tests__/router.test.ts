import { beforeAll, describe, expect, it } from 'bun:test'
import request from 'supertest'
import express from 'express'
import router from 'router'

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
  })
})
