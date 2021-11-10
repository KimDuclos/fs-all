package castings;

public class Main {
    public static void main(String args[]) {
        int myInt = 9;

        double myDouble = myInt; // Widening - must be done manually - convert double to int

        System.out.println("myInt = " + myInt); // prints out hard coded int
        System.out.println("myDouble = " + myDouble + "\n"); // prints out int converted to double

        double my2double = 9.78;

        int my2int = (int) my2double; // Narrowing - has to be done manually

        System.out.println("my2double = " + my2double); // prints out hard coded double
        System.out.println("my2int = " + my2int); // prints out double converted to int
    }
}
