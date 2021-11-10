package employeeApp;  // specify the package aka containing folder/directory

public class Main {  // class needs to named same as filename

    public static void main(String[] args) { // method is a function that belongs to a class
        workWithData();
    }

    private static void workWithData() { 

        Employee myEmp = new Employee("First", "Last", 1234.12, true, 1, 1); // Employee type to hold employee

        myEmp.setFname("George");  // uses setFname method to update the fname
        myEmp.doubleSalary();  // will use method in employee file to double salary

        // System.out.println(myEmp.getFname());
        // System.out.println(myEmp.getHas401K());

        System.out.println(myEmp); // overrided toString in employee.java file
    }
}


// RUN FILE
// javac employeeApp/*.java -> select all .java files to convert to jar
// jar cvfe employeeApp.jar employeeApp.Main employeeApp/*.class ->  create jar file from all class files previously created
// java -jar employeeApp.jar -> runs jar file