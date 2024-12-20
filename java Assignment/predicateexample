package classcode;

import java.util.function.Predicate;

public class PredicateExample {

    public static void main(String[] args) {
       
        Predicate<Integer> isEven = num -> num % 2 == 0;

       
        Predicate<Integer> isGreaterThan100 = num -> num > 100;

        
        Predicate<Integer> isOdd = isEven.negate();

       
        Predicate<Integer> isEvenAndGreaterThan100 = isEven.and(isGreaterThan100);

       
        Predicate<Integer> isEvenOrGreaterThan100 = isEven.or(isGreaterThan100);

        
        Predicate<Integer> isNotEven = isEven.negate();

        
        System.out.println("isEven (12): " + isEven.test(12));                          
        System.out.println("isGreaterThan100 (120): " + isGreaterThan100.test(120));  
        System.out.println("isEvenAndGreaterThan100 (120): " + isEvenAndGreaterThan100.test(120));
        System.out.println("isEvenOrGreaterThan100 (140): " + isEvenOrGreaterThan100.test(140));  
        System.out.println("isNotEven (120): " + isNotEven.test(120));                
        System.out.println("isOdd (121): " + isOdd.test(121));                         
    }
}
