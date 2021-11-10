package randoms;

import java.util.Random;

public class Main {
    public static void main(String args[])
    {
        Random rand = new Random(); // new object of Random() class from util import

        System.out.println("Min Num");
        System.out.println("min int " + Integer.MIN_VALUE);  // lowest num in int class type
        System.out.println("Max num");
        System.out.println("max int " + Integer.MAX_VALUE);  // highest num in int class type

        int result = rand.nextInt(10); // rand num from 10 starting at 0 using built-in util
        System.out.println("Random num from 10 starting at 0");
        System.out.println(result);

        result = rand.nextInt(20) + 5; // rand number from 20 starting at 5
        System.out.println("Random num from 20 starting at 5");
        System.out.println(result);

        double dresult = rand.nextDouble();
        System.out.println("Random double from 0.0 to 1.0");
        System.out.println(dresult);

    }
    
}
