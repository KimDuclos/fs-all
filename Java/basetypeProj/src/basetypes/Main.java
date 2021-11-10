package basetypes;

public class Main {
    public static void main(String args[]) {
        // create numbers that will be worked with
        int a = 2;
        int b = 1;
        double ba = 11.5;

        // manipulate the above numbers and print out the results
        // datatypes will be typecast

        double result = ba / a;
        System.out.println(result); // will output a double despite using an int

        System.out.println(b + a); // int because both are ints

        System.out.println(b / a); // int because both are ints

        System.out.println(b % a); // int because both are ints

        String sa = "Lambda";
        String sb = "School";

        String ans = sa + sb;
        System.out.println(ans); // prints combined above strings
        System.out.print(sa + " " + sb + "\n"); // just did one spaced correctly for practice

        // compound increment operator
        a += b;
        System.out.print(a + "\n");

        b++;
        System.out.println(b);

    }
}