package employeeApp;

public class Employee {
    private static int maxID = 1; // initialize variable that every employee will reach to in this memory space - changing it changes it for all employees
    private int id;

    private String fname;
    private String lname;
    private double salary;
    private boolean has401K;

    private int companyId;
    private int healthPlanId;

    // make a new employee object with construtor to create object
    public Employee(String fname,   // constructor must be named same as class
                    String lname, 
                    double salary, 
                    boolean has401K, 
                    int companyId, 
                    int healthPlanId) {  

        id = maxID; // this not needed when not parament. This is a field id.
        maxID++; // increment static id that will apply to every employee, incrementing for each one
        this.fname = fname;  // referring to employee's fname, not just parameter
        this.lname = lname;
        this.salary = salary;
        this.has401K = has401K;

        this.companyId = companyId;
        this.healthPlanId = healthPlanId;
    }

    // Getters and setters  -> public and allow us to read and write values to the above fields
    // Fname
    public String getFname()  {  // getter method
        return fname;
    }

    public void setFname(String fname) {  // void - just sets but does not return anything
        this.fname = fname; 
    }

    // Lname
    public String getLname()  {  
        return lname;
    }

    public void setLname(String lname) {  
        this.lname = lname; 
    }

    // salary
    public double getSalary()  {  
        return salary;
    }

    public void setSalary(double salary) {  
        this.salary = salary; 
    }

    // has401K
    public boolean getHas401K()  {  
        return has401K;
    }

    public void setHas401K(boolean has401K) {  
        this.has401K = has401K; 
    }

    // companyId
    public int getCompanyId()  {  
        return companyId;
    }

    public void setCompanyId(int companyId) {  
        this.companyId = companyId; 
    }

    // healthPlanId
    public int getHealthPlanId()  {  
        return healthPlanId;
    }

    public void setHealthPlanId(int healthPlanId) {  
        this.healthPlanId = healthPlanId; 
    }

    public int getID() {
        return id;
    }

    public void doubleSalary() {  // called in Main like other methods
        salary *= 2;
    }

    @Override  // annotation to override output that just gives memory location of employee
    public String toString() {
        return "Employee { \n" +
            "id: " + id + "\n" +
            "fname: " + fname + "\n" +
            "lname: " + lname + "\n" +
            "salary: " + salary + "\n" +
            "has401K: " + has401K + "\n" +
            "companyId: " + companyId + "\n" +
            "healthPlanId: " + healthPlanId + "\n}";
    }
}
