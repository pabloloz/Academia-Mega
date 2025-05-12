using System;

class Program
{
    private static Dictionary<string, string> usuarios = new Dictionary<string, string>
    {
        {"admin", "qwerty"},
        {"admin2", "1234"}
    };

    static void Main(string[] args)
    {
        // Mensaje de bienvenida
        Console.WriteLine("Hola mundo, aquí desde C#");
        Console.WriteLine("Tienes que iniciar sesión");

        // Definir usuario y contraseña
        Console.WriteLine("Ingresa tu usuario: ");
        string? usuarioIngresado = Console.ReadLine();
        Console.WriteLine("Ingresa tu contraseña: ");
        string? passIngresada = Console.ReadLine();

        if (usuarioIngresado != null)
        {
            if (usuarios.ContainsKey(usuarioIngresado) && 
            usuarios[usuarioIngresado] == passIngresada)
            {
                Console.WriteLine("Has ingresado con éxito");
                for (int i = 1; i <= 50; i++)
                {
                    Console.WriteLine($"{i}. Hola usuario, gracias");
                }
                Console.WriteLine("\nPresiona Enter para salir del programa");
                Console.ReadLine();
            }
            else
            {
                Console.WriteLine("Usuario/contraseña Incorrecto");
                Console.WriteLine("\nPresiona Enter para salir del programa");
                Console.ReadLine();
            }
        }
    }
}
