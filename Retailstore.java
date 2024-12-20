import java.util.Scanner;

public class RetailStore {

    
    public static double calculateTotalPrice(double itemPrice, int quantity, double salesTaxRate, double discountRate) {
        
        double subtotal = itemPrice * quantity;

        
        double salesTax = subtotal * salesTaxRate;

        
        double discount = subtotal * discountRate;

        
        double totalPrice = subtotal + salesTax - discount;
        return totalPrice;
    }

   
    public static void displayTransactionDetails(double itemPrice, int quantity, double salesTaxRate, double discountRate) {
        
        double subtotal = itemPrice * quantity;

        
        double salesTax = subtotal * salesTaxRate;

        double discount = subtotal * discountRate;

        
        double totalPrice = calculateTotalPrice(itemPrice, quantity, salesTaxRate, discountRate);

        System.out.printf("Item Price: $%.2f\n", itemPrice);
        System.out.printf("Quantity: %d\n", quantity);
        System.out.printf("Subtotal: $%.2f\n", subtotal);
        System.out.printf("Sales Tax (%.0f%%): $%.2f\n", salesTaxRate * 100, salesTax);
        System.out.printf("Discount (%.0f%%): -$%.2f\n", discountRate * 100, discount);
        System.out.printf("Total Price: $%.2f\n", totalPrice);
    }

    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

       
        System.out.println("Welcome to the Retail Store!");
        boolean exit = false;

        while (!exit) {
            
            System.out.println("\nPlease select an option:");
            System.out.println("1. Calculate Total Price");
            System.out.println("2. Exit");
            System.out.print("Enter your choice: ");
            int choice = scanner.nextInt();

            switch (choice) {
                case 1:
                
                    System.out.print("Enter item price: $");
                    double itemPrice = scanner.nextDouble();

                    System.out.print("Enter quantity: ");
                    int quantity = scanner.nextInt();

                    System.out.print("Enter sales tax rate (as a percentage, e.g., 8 for 8%): ");
                    double salesTaxRate = scanner.nextDouble() / 100; 

                    System.out.print("Enter discount rate (as a percentage, e.g., 5 for 5%): ");
                    double discountRate = scanner.nextDouble() / 100; 

         
                    displayTransactionDetails(itemPrice, quantity, salesTaxRate, discountRate);
                    break;

                case 2:
                  
                    exit = true;
                    System.out.println("Thank you for using the Retail Store system. Goodbye!");
                    break;

                default:
                    System.out.println("Invalid choice, please select again.");
                    break;
            }
        }

        scanner.close();
    }
}
