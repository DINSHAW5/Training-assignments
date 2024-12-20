package classcode;

interface AuthorPrize {
    String checkPrizeEligibility(String authorName, int noOfBooks);
}

public class LambdaAuthorPrize {

    public static void main(String[] args) {
        // Author and book count details
        String authorName1 = "Sir Arthur Conan Doyle";
        int noOfBooks1 = 12;
        
        String authorName2 = "John Doe";
        int noOfBooks2 = 8;

        // Lambda expression to check if the author qualifies for the prize
        AuthorPrize prizeEligibility = (author, books) -> {
            if (books > 10) {
                return "Congratulations, " + author + "! You have won the prize for writing " + books + " books!";
            } else {
                return "Sorry, " + author + ". You need to write more than 10 books to win the prize.";
            }
        };

        // Display prize eligibility messages for each author
        System.out.println(prizeEligibility.checkPrizeEligibility(authorName1, noOfBooks1)); 
        System.out.println(prizeEligibility.checkPrizeEligibility(authorName2, noOfBooks2)); 
    }
}
