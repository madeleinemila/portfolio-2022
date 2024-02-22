import { BrowserContext, Page } from "@playwright/test";

export const clickNewTabLink = async (context: BrowserContext, page: Page, linkText: string) => {
  const pagePromise = context.waitForEvent("page");
  await page.getByRole("link", { name: linkText }).click();
  const newPage = await pagePromise;
  await newPage.waitForLoadState();
  return newPage;
};
