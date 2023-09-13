import { describe, expect, it} from "bun:test"
import request from 'supertest'
import express from 'express'

const app = express()

describe('route "/"', () => {
  it('responds with 200 OK', async () => {
    const response = await request(app).get('/')

    expect(response.status).toBe(200)
  })
})
