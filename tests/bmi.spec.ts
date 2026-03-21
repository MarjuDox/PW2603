import { test, expect } from '@playwright/test';
import { BmiPage } from '../pages/BmiPage';

test('BMI Calculator - Metric', async ({ page }) => {
  const bmiPage = new BmiPage(page);

  const data = {
    age: 25,
    gender: 'male',
    height: 170, // cm
    weight: 73   // kg
  };

  await test.step('Open BMI page', async () => {
    await bmiPage.navigate();
  });

  await test.step('Select metric unit', async () => {
    await bmiPage.selectMetricUnit();
  });

  await test.step('Fill form', async () => {
    await bmiPage.fillForm(data);
  });

  await test.step('Calculate BMI', async () => {
    await bmiPage.calculate();
  });

  await test.step('Validate result', async () => {
    const resultText = await bmiPage.getResult();

    // Expected BMI calculation
    const expectedBMI = (data.weight / ((data.height / 100) ** 2)).toFixed(1);

    // Validate contains BMI value
    expect(resultText).toContain(expectedBMI);
    //console.log(`Calculated BMI: ${expectedBMI}`);
  });
});