package alexey.grizly.com.users.controllers;




import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/users")
public class AppUsersController {

    @GetMapping("all")
    public ResponseEntity<?> getAllUserWithPagination(HttpServletRequest request){
        request.getQueryString();
        return ResponseEntity.ok("Супер!");
    }
}
