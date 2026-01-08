import xlsx from 'xlsx';

export function getExcelData(sheetName) {
  const workbook = xlsx.readFile('./test-data/loginData.xlsx');
  const sheet = workbook.Sheets[sheetName];
  return xlsx.utils.sheet_to_json(sheet);
}
