using System;
using System.Text;
using System.Collections.Generic; 

class Program
{
    private static Dictionary<string, string> usuarios = new Dictionary<string, string>
    {
        {"admin", "qwerty"},
        {"admin2", "1234"},
        {"test", "test"}
    };

    private const int MAX_ATTEMPTS = 3;

    static void Main(string[] args)
    {
        // Mensaje de bienvenida
        Console.WriteLine("Hola mundo, aquí desde C#");
        Console.WriteLine("Tienes que iniciar sesión");

        // Intentar iniciar sesión y almacenar el usuario
        string? usuarioIngresado = TryLogin();

        // Validación después de los intentos de inicio de sesión
        if (usuarioIngresado != null)
        {
            Console.WriteLine($"Hola {usuarioIngresado}");
        }
        else
        {
            Console.WriteLine("Has excedido el número máximo de intentos");
        }
    }

    private static string? TryLogin()
    {
        int intentosRestantes = MAX_ATTEMPTS;

        while (intentosRestantes > 0)
        {
            Console.WriteLine($"\nIntentos restantes: {intentosRestantes}");
            Console.Write("Ingresa tu nombre de usuario: ");
            string? UserLogged = Console.ReadLine();
            Console.WriteLine("Ingresa tu contraseña: ");
            string? passIngresada = ReadPassword();

            if (string.IsNullOrEmpty(UserLogged) || string.IsNullOrEmpty(passIngresada))
            {
                Console.WriteLine("\nError: El usuario y contraseña no pueden estar vacíos");
                intentosRestantes--;
                continue;
            }
            else
            {
                if (usuarios.ContainsKey(UserLogged) && usuarios[UserLogged] == passIngresada)
                {
                    Console.WriteLine("Has ingresado con éxito");
                    Console.WriteLine("Acceso concedido.");
                    Console.WriteLine("\nBienvenido al sistema");
                    return UserLogged; // Devuelve user correcto
                }
                else
                {
                    Console.WriteLine("Usuario/contraseña incorrecto");
                    Console.WriteLine("\nInténtalo de nuevo");
                    intentosRestantes--;
                }
            }
        }

        return null;
    }

    private static string ReadPassword()
    {
        StringBuilder password = new StringBuilder();
        ConsoleKeyInfo keyInfo;

        do
        {
            keyInfo = Console.ReadKey(true);
            if (!char.IsControl(keyInfo.KeyChar))
            {
                password.Append(keyInfo.KeyChar);
                Console.Write("*");
            }
            else if (keyInfo.Key == ConsoleKey.Backspace && password.Length > 0)
            {
                password.Remove(password.Length - 1, 1);
                Console.Write("\b  \b");
            }
        } while (keyInfo.Key != ConsoleKey.Enter);

        Console.WriteLine(); 
        return password.ToString();
    }
}
