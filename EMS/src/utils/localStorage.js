/* ========= KEYS ========= */
const USERS_KEY = "ems_users";
const EMPLOYEES_KEY = "ems_employees";
const ATTENDANCE_KEY = "ems_attendance";
const PAYMENTS_KEY = "ems_payments";
const ANNOUNCEMENTS_KEY = "ems_announcements";
const LEAVES_KEY = "ems_leaves";
const DEPARTMENTS_KEY = "ems_departments";
const LOGGINUSER_KEY = "emp_login";
/* ========= COMMON ========= */
export const getData = (key) => {
  return JSON.parse(localStorage.getItem(key)) || [];
};

const setData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

/* ========= USERS ========= */
// signup
export const addUser = (user) => {
  const users = getData(USERS_KEY);
  users.push({ ...user, id: Date.now(), approved: false });
  setData(USERS_KEY, users);
};

// create Employee -- auto approved(by admin)
export const createEmployee = (user) => {
  const users = getData(USERS_KEY);
  users.push({ ...user, id: Date.now(), approved: true });
  setData(USERS_KEY, users);
};

// get all users (admin)
export const getUsers = () => getData(USERS_KEY);

export const getUserByEmp = (emp_id) => {
  const data = getData(USERS_KEY).find(elem=> elem.id == emp_id);
  return data;
}

// approve user (admin)
export const approveUser = (id) => {
  const users = getData(USERS_KEY).map(u =>
    u.id === id ? { ...u, approved: true } : u
  );
  setData(USERS_KEY, users);
    getData();
};

// fetch approved user only
export const getApprovedUser = ()=>{
  const users = getUsers().filter(elem=>elem.approved);
  return users;
}

export const getPendingUser = () => {
  const users = getData(USERS_KEY).filter(user => user.approved == false);
  return users;
}
export const getOnLeaveToday = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return getLeaves().filter(leave => {
    if (leave.status !== "approved") return false;

    const start = new Date(leave.startDate);
    const end = new Date(leave.endDate);

    start.setHours(0, 0, 0, 0);
    end.setHours(0, 0, 0, 0);

    return today >= start && today <= end;
  });
};


export const getLeavesByEmp = (id) => getLeaves().filter(l => l.empId == id);

export const getOnPresentToday = ()=>{
   const users = getAttendance().filter(user => user.date == new Date().toLocaleDateString());
  return users;
}
// login
export const loginUser = (email, password) => {
  const users = getData(USERS_KEY);
  return users.find(
    u => u.email === email && u.password === password && u.approved
  );
};

// updatae user
export const updateUser = (id,updated) =>{
  const update = getUsers().map(user => user.id == id ? {...user,...updated} : user );
  setData(USERS_KEY,update)
}

// delete user
export const deleteUser  = (id) =>{
  const users = getUsers().filter(elem=>elem.id != id);// users array me vo element honge jo delete na huye ho
  setData(USERS_KEY,users);
}

/* ========= EMPLOYEES ========= */
export const addEmployee = (emp) => {
  const employees = getData(EMPLOYEES_KEY);
  employees.push({ ...emp, id: Date.now() });
  setData(EMPLOYEES_KEY, employees);
};
// fetch only employees not tl or seniors
export const getEmployees = () => {
  const Employees =getApprovedUser().filter(elem => elem.role == 'employee');
  setData(EMPLOYEES_KEY,Employees);
  return Employees;
};

export const getLeavesAllEmp = () => {
  const data = getLeaves();
}
export const updateEmployee = (id, updated) => {
  const employees = getData(EMPLOYEES_KEY).map(e =>
    e.id === id ? { ...e, ...updated } : e
  );
  setData(EMPLOYEES_KEY, employees);
};

export const deleteEmployee = (id) => {
  const employees = getData(EMPLOYEES_KEY).filter(e => e.id !== id);
  setData(EMPLOYEES_KEY, employees);
};

/* ========= ATTENDANCE ========= */
export const addAttendance = (record) => {
  const data = getData(ATTENDANCE_KEY);
  data.push({ ...record, id: Date.now() });
  setData(ATTENDANCE_KEY, data);
};

export const getAttendanceByEmp = (empId) =>
  getData(ATTENDANCE_KEY).filter(a => a.empId == empId);

export const getAttendance = () => getData(ATTENDANCE_KEY);
/* ========= PAYMENTS ========= */
export const addPayment = (payment) => {
  const data = getData(PAYMENTS_KEY);
  data.push({ ...payment, id: Date.now() });
  setData(PAYMENTS_KEY, data);
};

export const getPayments = () => {
  const data = getData(PAYMENTS_KEY);
  return data;
}
export const getPaymentsByEmp = (empId) =>
  getData(PAYMENTS_KEY).filter(p => p.empId == empId);

export const updateStatusByPayment = (paymentId) => {
  const data = getPayments().map(p => p.id == paymentId ? {...p,status:"paid"} : p)
  setData(PAYMENTS_KEY,data) 
}


/* ========= ANNOUNCEMENTS ========= */
export const addAnnouncement = (ann) => {
  const data = getData(ANNOUNCEMENTS_KEY);
  data.push({ ...ann, id: Date.now(), date: new Date().toLocaleDateString() });
  setData(ANNOUNCEMENTS_KEY, data);
};


export const getAnnouncements = () => getData(ANNOUNCEMENTS_KEY);

export const getAnnouncementByEmp = (annId) => 
  getData(ANNOUNCEMENTS_KEY).find(ann => ann.id == annId);


export const updateAnnouncement = (id,updated) => {
    // user ka elements + updated ke elements merge ho jeyage or naye vale se override ho jayege
    const announcement = getAnnouncements().map(ann => ann.id == id ? {...ann,...updated} :ann)
    // save to localstorage
    setData(ANNOUNCEMENTS_KEY,announcement) 
}

export const deleteAnn = (id) => {
  const filterAnnouncement =  getAnnouncements().filter(ann => ann.id != id);
  // add announcement to localstorage
  setData(ANNOUNCEMENTS_KEY,filterAnnouncement)
}
/* ========= LEAVES ========= */
export const applyLeave = (leave) => {
  const data = getData(LEAVES_KEY);
  data.push({ ...leave, id: Date.now(), status: "pending" });
  setData(LEAVES_KEY, data);
};

export const getLeaves = () => getData(LEAVES_KEY);

export const approveLeave = (id) => {
  console.log(id)
 const data = getLeaves().map(l => l.id == id ? {...l,status:"approved"} : l)
 setData(LEAVES_KEY,data)
};

export const rejectLeave = (id)=>{
  const data = getData(LEAVES_KEY).map(l => l.id == id ? {...l,status:"rejected"}: l)
  setData(LEAVES_KEY,data)
}

// departments
export const getDepartments = () => getData(DEPARTMENTS_KEY);

export const SetDepartments = (data) => {
  const departments = getDepartments();
  departments.push({id:Date.now(),data: data.toLowerCase()});
  setData(DEPARTMENTS_KEY,departments);
}
export const getDepartmentById = (id) => {
  const departments = getDepartments();
  return departments.find(dep => dep.id === Number(id));
};

export const updateDepartment = (id, department) => {
  const departments = getDepartments();

  const updated = departments.map(dep =>
    dep.id === Number(id)
      ? { ...dep, data:department.toLowerCase() }
      : dep
  );

  setData(DEPARTMENTS_KEY,updated);
};

export const deleteDepartment = (id) => {
    const deleteDepartment = getDepartments().filter(dep => dep.id != id);
    setData(DEPARTMENTS_KEY,deleteDepartment); 
}
// loggin users
export const setLoggedInUser = (data) => setData("loggedInUser",data)
export const getLoggedInUser = () => getData("loggedInUser")
export const clearLoggedInUser = () => setData("loggedInUser",{});
export const checkTlOrSeniors = () => {
  const role = getLoggedInUser().role;
  console.log(role)
}