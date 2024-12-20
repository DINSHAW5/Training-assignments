package classcode;

public class EmployeeSalaryAdjustment {
    
    public static void main(String[] args) {
        double[] salaries = { 25000, 20000, 35000, 12000, 29000 };

        for (int i = 0; i < salaries.length; i++) {
            double originalSalary = salaries[i];
            double updatedSalary = calculateUpdatedSalary(originalSalary);

           
            double hra = updatedSalary * 0.10; // HRA = 10% of updated salary
            double ta = updatedSalary * 0.05;  // TA = 5% of updated salary
            double da = updatedSalary * 0.08;  // DA = 8% of updated salary

           
            printSalaryDetails(i + 1, originalSalary, updatedSalary, hra, ta, da);
            
            
            if (updatedSalary < 15000) {
                System.out.println("Employee " + (i + 1) + " should improve their work to earn a higher salary.\n");
            }
        }
    }

    // Method to calculate the updated salary based on conditions
    private static double calculateUpdatedSalary(double salary) {
        double updatedSalary = salary;

        // Increase salary by 10% if it's 30000 or above
        if (updatedSalary >= 30000) {
            updatedSalary += updatedSalary * 0.10;
        }

        // Add 2000 if salary is exactly 20000
        if (updatedSalary == 20000) {
            updatedSalary += 2000;
        }

        return updatedSalary;
    }

    
    private static void printSalaryDetails(int employeeNumber, double originalSalary, double updatedSalary, double hra, double ta, double da) {
        System.out.println("Employee " + employeeNumber + " - Original Salary: " + originalSalary);
        System.out.println("Updated Salary: " + updatedSalary);
        System.out.println("HRA: " + hra);
        System.out.println("TA: " + ta);
        System.out.println("DA: " + da);
        System.out.println("Total Salary (including allowances): " + (updatedSalary + hra + ta + da));
        System.out.println();
    }
}
