package scopes;

public class Main {
    static int car = 5;

    public static void main(String[] args) {
        // local var only usable in method
        int count = 0;

        // new block
        {
            // local vars only to this block
            // int coffee = 5;

            int car = 15;
            System.out.println(car);

            System.out.print(count++ + "\n"); // prints original 0 and then 1.
            System.out.println(++count); // prints 1
        }

        // System.out.println(coffee); // cannot access coffee from outside the block

        System.out.println(count); // prints 2 because count is accessible in the method and has been incremented
                                   // twice in the block

        // new block
        {
            int coffee = 10; // this is unrelated to the previous unreachable coffee var
            System.out.println(coffee); // prints out hardcoded int of 10
        }

        System.out.println(car); // prints out 5 from still reachable static int in class
    }
}
