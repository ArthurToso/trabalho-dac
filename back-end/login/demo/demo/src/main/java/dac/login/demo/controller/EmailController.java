@RestController
@RequestMapping("/api")
public class EmailController {

    @Autowired
    private EmailService emailService;

    @PostMapping("/enviar-email-senha")
    public ResponseEntity<?> enviarEmailSenha(@RequestBody Map<String, String> payload) {
        String email = payload.get("email");
        String senha = payload.get("senha");
        emailService.enviarSenhaPorEmail(email, senha);
        return ResponseEntity.ok().build();
    }
}