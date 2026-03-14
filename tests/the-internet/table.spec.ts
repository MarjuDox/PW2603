import { test, expect } from '@playwright/test';

test('Verify the system return all maximum due from table 1 is Jason Doe', async ({ page }) => {
  await page.goto('/tables');
  const table = page.locator('#table1');

  const rows = await table.evaluate((tbl) => {
    const headers = Array.from(tbl.querySelectorAll('thead th')).map((th) =>
      (th.textContent ?? '').trim()
    );
    return Array.from(tbl.querySelectorAll('tbody tr')).map((tr) => {
      const cells = Array.from(tr.querySelectorAll('td')).map((td) =>
        (td.textContent ?? '').trim()
      );
      return headers.reduce<Record<string, string>>((acc, header, i) => {
        acc[header] = cells[i] ?? '';
        return acc;
      }, {});
    });
  });

  const dueNumbers = rows.map((r) =>
    parseFloat((r['Due'] ?? '').replace(/\$/g, '')) || 0
  );
  const maxDue = Math.max(...dueNumbers);
  const maxDueIndices = dueNumbers
    .map((due, i) => (due === maxDue ? i : null))
    .filter((i): i is number => i !== null);

  const maxDueNames = maxDueIndices.map((id) => {
    const row = rows[id];
    return `${row['First Name'] ?? ''} ${row['Last Name'] ?? ''}`.trim();
  });

  expect(maxDueNames).toContain('Jason Doe');
  expect(maxDueNames).toHaveLength(1);
  // console.log('Max due:', maxDue, '| Names:', maxDueNames);
});


test('Verify the system return all minimum due from table 1 is John Smith, Tim Conway', async ({ page }) => {
  await page.goto('/tables');
  const table = page.locator('#table1');

  const rows = await table.evaluate((tbl) => {
    const headers = Array.from(tbl.querySelectorAll('thead th')).map((th) =>
      (th.textContent ?? '').trim()
    );
    return Array.from(tbl.querySelectorAll('tbody tr')).map((tr) => {
      const cells = Array.from(tr.querySelectorAll('td')).map((td) =>
        (td.textContent ?? '').trim()
      );
      return headers.reduce<Record<string, string>>((acc, header, i) => {
        acc[header] = cells[i] ?? '';
        return acc;
      }, {});
    });
  });

  const dueNumbers = rows.map((r) =>
    parseFloat((r['Due'] ?? '').replace(/\$/g, '')) || 0
  );

  const minDue = Math.min(...dueNumbers);
  const minDueIndices = dueNumbers
    .map((due, i) => (due === minDue ? i : null))
    .filter((i): i is number => i !== null);

  const minDueNames = minDueIndices.map((id) => {
    const row = rows[id];
    return `${row['First Name'] ?? ''} ${row['Last Name'] ?? ''}`.trim();
  });

  expect(minDueNames).toEqual(expect.arrayContaining(['John Smith', 'Tim Conway']));
  expect(minDueNames).toHaveLength(2);
  // console.log('Min due:', minDue, '| Names:', minDueNames);
});