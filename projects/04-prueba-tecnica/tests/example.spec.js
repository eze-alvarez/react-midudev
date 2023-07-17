// @ts-check
import { test, expect } from '@playwright/test'
const LOCAL_HOST_URL = 'http://localhost:5173'
const PREFIX_IMAGE_URL = 'https://cataas.com'

test('app show random fact and image of cat', async ({ page }) => {
  await page.goto(LOCAL_HOST_URL)

  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageUrl = await image.getAttribute('src')

  console.log({ textContent, imageUrl })
  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageUrl?.startsWith(PREFIX_IMAGE_URL)).toBeTruthy()
})
