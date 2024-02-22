import { test, expect } from "@playwright/test";
import { clickNewTabLink } from "./utils";

const mainTitle = "Madeleine Milasas";
const mainSubtitle = "Software Engineer & Maker";
const aboutTitle = "hi!";
const aboutSubtitle = "I'm Madeleine, a software engineer from Sydney, based in Berlin.";
const aboutPast =
  "I started my career in film, television, music and live events. Inspired by all the web-based innovations I saw, I switched into full-time software engineering.";
const aboutPresent = "You can now find me developing applications and experimenting in sound, image & code.";
const workProfessionalTitle = "Professional";

test("Main page -> About", async ({ context, page }) => {
  await page.goto("/");

  // Main page
  await expect(page).toHaveTitle("Madeleine Milasas - Portfolio");
  await expect(page.getByText(mainTitle)).toBeInViewport();
  await expect(page.getByText(mainTitle)).toBeVisible();
  await expect(page.getByText(mainSubtitle)).toBeInViewport();
  await expect(page.getByText(mainSubtitle)).toBeVisible();
  await expect(page.getByText(aboutTitle)).not.toBeInViewport();

  // Go to About page
  await page.getByRole("button", { name: "About" }).click();
  await expect(page.getByText(mainTitle)).not.toBeInViewport();
  await expect(page.getByText(aboutTitle)).toBeInViewport();
  await expect(page.getByText(aboutTitle)).toBeVisible();
  await expect(page.getByText(aboutSubtitle)).toBeInViewport();
  await expect(page.getByText(aboutSubtitle)).toBeVisible();
  await expect(page.getByText(aboutPast)).toBeInViewport();
  await expect(page.getByText(aboutPast)).toBeVisible();
  await expect(page.getByText(aboutPresent)).toBeInViewport();
  await expect(page.getByText(aboutPresent)).toBeVisible();

  // Email contact
  await expect(page.getByRole("link", { name: "maddi.milasas@gmail.com" })).toHaveAttribute(
    "href",
    "mailto:maddi.milasas@gmail.com"
  );

  // GitHub link
  const githubPage = await clickNewTabLink(context, page, "GitHub");
  await expect(githubPage).toHaveURL("https://github.com/madeleinemila");
  await expect(githubPage).toHaveTitle("madeleinemila (Madeleine Milasas) · GitHub");

  // LinkedIn link
  const linkedInPage = await clickNewTabLink(context, page, "LinkedIn");
  await expect(linkedInPage).toHaveURL(/linkedin.com/); // Not testing full URL since LinkedIn can redirect to sign up page
  await expect(linkedInPage).toHaveURL(/madeleine-milasas/);
  await expect(linkedInPage).toHaveTitle(/LinkedIn/);

  // Resume contact
  await expect(page.getByRole("link", { name: "Resume available on request" })).toHaveAttribute(
    "href",
    "mailto:maddi.milasas@gmail.com"
  );

  // Jump to Work
  await page.getByRole("button", { name: "Jump to my work below" }).click();
  await expect(page.getByText(aboutTitle)).not.toBeInViewport();
  await expect(page.getByText(mainTitle)).not.toBeInViewport();
  await expect(page.getByText(workProfessionalTitle)).toBeInViewport();
  await expect(page.getByText(workProfessionalTitle)).toBeVisible();
});

test("Go to Work page", async ({ page }) => {
  await page.goto("/");

  // Go to Work page
  await page.getByRole("button", { name: /^Work$/ }).click();
  await expect(page.getByText(aboutTitle)).not.toBeInViewport();
  await expect(page.getByText(mainTitle)).not.toBeInViewport();
  await expect(page.getByText(workProfessionalTitle)).toBeInViewport();
  await expect(page.getByText(workProfessionalTitle)).toBeVisible();
});
