@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    public void enviarSenhaPorEmail(String email, String senha) {
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

            helper.setTo(email);
            helper.setSubject("Cadastro realizado - Sua senha de acesso");

            String htmlMsg = "<div style=\"font-family:Arial,sans-serif;max-width:500px;margin:auto;border:1px solid #eee;padding:24px;background:#fafbfc;\">"
                    + "<h2 style=\"color:#22c55e;\">Bem-vindo ao DAC!</h2>"
                    + "<p>Seu cadastro foi realizado com sucesso.</p>"
                    + "<p style=\"font-size:18px;margin:24px 0;\">"
                    + "<strong style='color:#22c55e;'>Sua senha de acesso:</strong> "
                    + "<span style=\"background:#e3fcec;color:#22c55e;padding:8px 16px;border-radius:6px;font-size:22px;letter-spacing:2px;\">"
                    + senha + "</span>"
                    + "</p>"
                    + "<p>Por favor, acesse o sistema e altere sua senha após o primeiro login.</p>"
                    + "<hr style=\"margin:32px 0;\">"
                    + "<p style=\"color:#888;font-size:13px;\">"
                    + "Se não foi você quem solicitou este cadastro, <span style='color:#ef4444;'>ignore este e-mail</span>."
                    + "<br>Atenciosamente,<br>Equipe DAC</p>"
                    + "</div>";

            helper.setText(htmlMsg, true);

            mailSender.send(message);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}