public class App {
    public static void main(String[] args) {
        Employee employeeOne = new Employee("Shane Geary", 27, 60000, "Denver");

        Employee employeeTwo = new Employee("Tanner Hawk", 26, 55000, "Denver");

        employeeTwo.raiseSalary();

        System.out.println(employeeOne.salary);
        System.out.println(employeeTwo.salary);
    }
}
