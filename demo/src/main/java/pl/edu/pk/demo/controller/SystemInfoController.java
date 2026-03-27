package pl.edu.pk.demo.controller;

import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:4200") // Odblokowanie dla Angulara
public class SystemInfoController {

    // Punkt 1: Podstawowy test dostępności (Ping)
    @GetMapping("/hello")
    public String checkSystemStatus() {
        return "Hello! API działa poprawnie.";
    }

    // Punkt 2: GET /hello/{name}
    @GetMapping("/hello/{name}")
    public String checkUserStatus(@PathVariable String name) {
        return "Hello, " + name + "!"; // ma zwracac na przyklad. "Hello, gabriela!"
    }

    // Punkt 3: Powitanie przez query string
    @GetMapping("/greet")
    public String greetUser(@RequestParam(defaultValue = "Gość") String name) {
        return "Witaj, " + name + " ☕! Jesteś połączony z głównym serwerem.";
    }

    // Punkt 4: Metadane systemu dla jsona
    @GetMapping("/info")
    public Map<String, String> getAppInfo() {
        Map<String, String> info = new HashMap<>();
        info.put("autor", "Aleksandra Gołek");
        info.put("framework", "Spring Boot 3.4.2");
        info.put("wersja", "0.0.1-SNAPSHOT");
        return info;
    }
}