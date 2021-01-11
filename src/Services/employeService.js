const KEYS = { employees: "employees", employeeId: "employeeId" };

export const getDepartmentCollection = () => [
  { id: "1", title: "Development" },
  { id: "2", title: "Design" },
  { id: "3", title: "Testing" },
  { id: "4", title: "Sales" },
];

export function insertEmployee(data) {
  let employees = getEmployees();
  data["id"] = generateEmployeeId();
  employees.push(data);
  localStorage.setItem(KEYS.employees, JSON.stringify(employees));
}

export function generateEmployeeId() {
  if (localStorage.getItem(KEYS.employeeId) == null)
    localStorage.setItem(KEYS.employeeId, "0");
  var id = parseInt(localStorage.getItem(KEYS.employeeId));
  localStorage.setItem(KEYS.employeeId, (++id).toString());
  return id;
}

export function updateEmployeeId(data) {
  let employee = getEmployees();
  let recordIndex = employee.findIndex((x) => x.id == data.id);
  employee[recordIndex] = { ...data };
  localStorage.setItem(KEYS.employees, JSON.stringify(employee));
}

export function deleteEmployee(id) {
  let employees = getEmployees();
  employees = employees.filter((x) => x.id != id);
  localStorage.setItem(KEYS.employees, JSON.stringify(employees));
}

export function getEmployees() {
  if (localStorage.getItem(KEYS.employees) == null)
    localStorage.setItem(KEYS.employees, JSON.stringify([]));
  let employees = JSON.parse(localStorage.getItem(KEYS.employees));
  let department = getDepartmentCollection();
  return employees.map((employee) => ({
    ...employee,
    department: department[employee.departmentId - 1].title,
  }));
}
