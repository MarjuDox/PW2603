export class BmiPage {
  constructor(page) {
    this.page = page;

    // Locators
    this.metricTab = page.locator('#menuon').getByRole('link', { name: 'Metric Units' })
    this.ageInput = page.locator('#cage');
    this.genderMale = page.locator('#csex1');
    this.genderFemale = page.locator('#csex2');
    this.heightInput = page.locator('#cheightmeter');
    this.weightInput = page.locator('#ckg');
    this.calculateBtn = page.locator('input[type="submit"]');
    this.resultText = page.locator('.bigtext', { hasText: 'BMI' }); // result BMI
  }

  async navigate() {
    await this.page.goto('https://www.calculator.net/bmi-calculator.html');
  }

  async selectMetricUnit() {
    await this.metricTab.click();
  }

  async fillForm({ age, gender, height, weight }) {
    await this.ageInput.fill(age.toString());

    if (gender === 'male') {
      await this.genderMale.check();
    } else {
      await this.genderFemale.check();
    }

    await this.heightInput.fill(height.toString());
    await this.weightInput.fill(weight.toString());
  }

  async calculate() {
    await this.calculateBtn.click();
  }

  async getResult() {
    return await this.resultText.textContent();
  }
}