import { test, expect } from "@playwright/test";
import { clickNewTabLink, clickCloseModalButton, clickWorkButton } from "./utils";

const mainTitle = "Madeleine Milasas";
const mainSubtitle = "Software Engineer & Maker";
const aboutTitle = "hi!";
const aboutSubtitle = "I'm Madeleine, a software engineer from Sydney, based in Berlin.";
const aboutPast =
  "I started my career in film, television, music and live events. Inspired by all the web-based innovations I saw, I switched into full-time software engineering.";
const aboutPresent = "You can now find me developing applications and experimenting in sound, image & code.";
const workProfessionalTitle = "Professional";
const workProjectsTitle = "Projects";
const scModalTitle = "Software Engineer - SafetyCulture";
const ansaradaModalTitle = "Software Engineer - Ansarada";
const brooklynModalTitle = "'Brooklyn at Hibernian' - Live Music & Video";
const subvixenModalTitle = /^Subvixen$/;
const gehmsModalTitle = /^Gehms$/;
const oModalTitle = "'Origin of O' - Taikoz concert";
const vividModalTitle = "Vivid Sydney - Dichroic Dimensions";

test("Main page -> About", async ({ context, page }) => {
  await page.goto("/");
  await expect(page.getByLabel("Loading")).not.toBeVisible();

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

test("Main -> Work page -> Main page", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByLabel("Loading")).not.toBeVisible();

  await clickWorkButton(page);
  await expect(page.getByText(aboutTitle)).not.toBeInViewport();
  await expect(page.getByText(mainTitle)).not.toBeInViewport();
  await expect(page.getByText(workProfessionalTitle)).toBeInViewport();
  await expect(page.getByText(workProfessionalTitle)).toBeVisible();

  await page.getByRole("button", { name: "back to landing page" }).click();
  await expect(page.getByText(mainTitle)).toBeInViewport();
  await expect(page.getByText(mainTitle)).toBeVisible();
  await expect(page.getByText(aboutTitle)).not.toBeInViewport();
  await expect(page.getByText(workProfessionalTitle)).not.toBeInViewport();
});

test("Work -> Professional modals", async ({ context, page, viewport }) => {
  await page.goto("/");
  await expect(page.getByLabel("Loading")).not.toBeVisible();
  await clickWorkButton(page);
  await expect(page.getByText(workProfessionalTitle)).toBeVisible();

  await page.getByText("Software Engineer @ SafetyCulture").click();
  await expect(page.getByText(scModalTitle)).toBeVisible();
  const scPage = await clickNewTabLink(context, page, "SafetyCulture");
  await expect(scPage).toHaveURL("https://safetyculture.com");
  await expect(scPage).toHaveTitle(/SafetyCulture/);
  await clickCloseModalButton(page);
  await expect(page.getByText(scModalTitle)).not.toBeVisible();

  await page.getByText("Software Engineer @ Ansarada").click();
  await expect(page.getByText(ansaradaModalTitle)).toBeVisible();
  const ansaradaPage = await clickNewTabLink(context, page, "Ansarada");
  await expect(ansaradaPage).toHaveURL("https://www.ansarada.com");
  await expect(ansaradaPage).toHaveTitle(/Ansarada/);
  if (viewport && viewport.width >= 580) {
    // Exercise closing modal via bg click
    await page.getByTestId("background").click({
      button: "left",
      position: { x: 10, y: 10 },
    });
  } else {
    await clickCloseModalButton(page);
  }
  await expect(page.getByText(ansaradaModalTitle)).not.toBeVisible();
});

test("Work -> Project modals -> Brooklyn -> Subvixen", async ({ context, page, isMobile }) => {
  await page.goto("/");
  await expect(page.getByLabel("Loading")).not.toBeVisible();
  await clickWorkButton(page);
  await expect(page.getByText(workProjectsTitle)).toBeVisible();

  await page.getByText(`"Brooklyn at Hibernian" live music & video`).click();
  await expect(page.getByText(brooklynModalTitle)).toBeVisible();
  const brooklynPage = await clickNewTabLink(context, page, "brooklynathibernian.com");
  await expect(brooklynPage).toHaveURL("https://brooklynathibernian.com");
  await expect(brooklynPage).toHaveTitle("Brooklyn at Hibernian : Music x Video : Sydney");
  if (!isMobile) {
    await page.keyboard.press("Escape"); // Exercising pressing ESC to close modal
  } else {
    await clickCloseModalButton(page);
  }
  await expect(page.getByText(brooklynModalTitle)).not.toBeVisible();

  await page.getByText(`"Subvixen" LED pixel mapper`).click();
  await expect(page.getByText(subvixenModalTitle)).toBeVisible();
  const subvixenRenderPage = await clickNewTabLink(context, page, "subvixen.onrender.com");
  await expect(subvixenRenderPage).toHaveURL("https://subvixen.onrender.com/");
  await expect(subvixenRenderPage).toHaveTitle("Subvixen");
  const subvixenGithubPage = await clickNewTabLink(context, page, "github.com/madeleinemila/subvixen");
  await expect(subvixenGithubPage).toHaveURL("https://github.com/madeleinemila/subvixen");
  await expect(subvixenGithubPage).toHaveTitle(/madeleinemila\/subvixen/);
  const ytLink = await clickNewTabLink(context, page, "Project presentation livestream");
  await expect(ytLink).toHaveURL("https://www.youtube.com/embed/t8pxUcoJPww?autoplay=1&rel=0&showinfo=0");
  await expect(ytLink).toHaveTitle("GA WDI Final Presentation - Subvixen Pixel Mapper - YouTube");
  await clickCloseModalButton(page);
  await expect(page.getByText(subvixenModalTitle)).not.toBeVisible();
});

test("Work -> Project modals -> Gehms -> Lighting", async ({ context, page }) => {
  await page.goto("/");
  await expect(page.getByLabel("Loading")).not.toBeVisible();
  await clickWorkButton(page);
  await expect(page.getByText(workProjectsTitle)).toBeVisible();

  await page.getByText(`"Gehms" retro games`).click();
  await expect(page.getByText(gehmsModalTitle)).toBeVisible();
  const gehmsRenderPage = await clickNewTabLink(context, page, "gehms.onrender.com");
  await expect(gehmsRenderPage).toHaveURL("https://gehms.onrender.com/");
  await expect(gehmsRenderPage).toHaveTitle("Gehms");
  const gehmsGithubPage = await clickNewTabLink(context, page, "github.com/madeleinemila/retro-gaming");
  await expect(gehmsGithubPage).toHaveURL("https://github.com/madeleinemila/retro-gaming");
  await expect(gehmsGithubPage).toHaveTitle(/madeleinemila\/retro-gaming/);
  await clickCloseModalButton(page);
  await expect(page.getByText(gehmsModalTitle)).not.toBeVisible();

  await page.getByText("Interactive lighting demos").click();
  const modalHeading = page.getByRole("heading", { name: "Interactive lighting demos", level: 2 });
  await expect(modalHeading).toBeVisible();
  await clickCloseModalButton(page);
  await expect(modalHeading).not.toBeVisible();
});

test("Work -> Project modals -> Rubiks", async ({ context, hasTouch, page, viewport }) => {
  await page.goto("/");
  await expect(page.getByLabel("Loading")).not.toBeVisible();
  const viewportHeight = viewport?.height ?? 0;
  if (hasTouch) {
    await clickWorkButton(page);
  } else {
    // Exercising scrolling to content rather than clicking
    await page.mouse.wheel(0, viewportHeight);
  }
  await expect(page.getByText(workProjectsTitle)).toBeVisible();
  await expect(page.getByText(workProjectsTitle)).toBeInViewport();
  await expect(page.getByText(mainTitle)).not.toBeInViewport();

  await page.getByText("Rubik's cube").click();
  const modalHeading = page.getByRole("heading", { name: "Rubik's cube", level: 2 });
  await expect(modalHeading).toBeVisible();
  const rubiksSolvedPage = await clickNewTabLink(context, page, "openprocessing.org/sketch/470700");
  await expect(rubiksSolvedPage).toHaveURL("https://openprocessing.org/sketch/470700");
  await expect(rubiksSolvedPage).toHaveTitle("Rubik's Cube Map - Solved - OpenProcessing");
  const rubiksUnsolvedPage = await clickNewTabLink(context, page, "openprocessing.org/sketch/470724");
  await expect(rubiksUnsolvedPage).toHaveURL("https://openprocessing.org/sketch/470724");
  await expect(rubiksUnsolvedPage).toHaveTitle("Rubik's Cube Map - Shuffled - OpenProcessing");
  await clickCloseModalButton(page);
  await expect(modalHeading).not.toBeVisible();
});

test("Work -> Project modals -> O -> Vivid", async ({ context, page }) => {
  await page.goto("/");
  await expect(page.getByLabel("Loading")).not.toBeVisible();
  await clickWorkButton(page);
  await expect(page.getByText(workProjectsTitle)).toBeVisible();

  await page.getByText(`"Origin of O" live show`).click();
  await expect(page.getByText(oModalTitle)).toBeVisible();
  await clickCloseModalButton(page);
  await expect(page.getByText(oModalTitle)).not.toBeVisible();

  await page.getByText(/^Vivid Sydney$/).click();
  await expect(page.getByText(vividModalTitle)).toBeVisible();
  const vividPage = await clickNewTabLink(context, page, "‘Dichroic Dimensions’ making-of video");
  await expect(vividPage).toHaveURL("https://player.vimeo.com/video/92922101");
  await expect(vividPage).toHaveTitle("Interview with The Digital Shamans • Vivid Sydney 2014 on Vimeo");
  await clickCloseModalButton(page);
  await expect(page.getByText(vividModalTitle)).not.toBeVisible();
});
