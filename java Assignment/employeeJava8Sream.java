package employee2;

import java.util.*;

class Employee {
    public String name;
    public double salary;

    public Employee(String name, double salary) {
        this.name = name;
        this.salary = salary;
    }

    @Override
    public String toString() {
        return name + ": " + salary;
    }


    public void increaseSalary(double percentage) {
        this.salary += this.salary * (percentage / 100);
    }
}

public class EmployeeJava8Stream {
    public static void main(String[] args) {

      
        List<Employee> employees = Arrays.asList(
            new Employee("Alice", 30000),
            new Employee("Bob", 50000),
            new Employee("Charlie", 120000),
            new Employee("David", 35000),
            new Employee("Eve", 80000),
            new Employee("Frank", 45000)
        );

        
        System.out.println("Employees with salary < 40000: ");
        employees.stream()
                 .filter(e -> e.salary < 40000)
                 .forEach(System.out::println);

       
        System.out.println("\nEmployees with salary > 75000: ");
        employees.stream()
                 .filter(e -> e.salary > 75000)
                 .forEach(System.out::println);

       
        System.out.println("\nIncreasing salary for employees with salary between 33,000 and 37,000 by 10%");
        employees.stream()
                 .filter(e -> e.salary >= 33000 && e.salary <= 37000)
                 .forEach(e -> e.increaseSalary(10));

       
        double avgSalary = employees.stream()
                                    .mapToDouble(e -> e.salary)
                                    .average()
                                    .orElse(0);
        System.out.println("\nAverage Salary: " + avgSalary);

        
        double yearlyTurnover = avgSalary * employees.size();
        System.out.println("\nCompany Yearly Turnover: " + yearlyTurnover);

       
        System.out.println("\nEmployees sorted by salary in descending order:");
        employees.stream()
                 .sorted(Comparator.comparingDouble((Employee e) -> e.salary).reversed())
                 .forEach(System.out::println);
    }
}
