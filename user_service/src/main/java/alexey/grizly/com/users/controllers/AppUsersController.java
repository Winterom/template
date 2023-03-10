package alexey.grizly.com.users.controllers;




import alexey.grizly.com.commons.errors.AppResponseErrorDto;
import alexey.grizly.com.users.dto.response.UserAccountGetByIdResponseDto;
import alexey.grizly.com.users.entities.UserAccount;
import alexey.grizly.com.users.mappers.UserAccountMapper;
import alexey.grizly.com.users.service.UserAccountService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/v1/users")
public class AppUsersController {
    private final UserAccountService userAccountService;
    private final UserAccountMapper userAccountMapper;

    @Autowired
    public AppUsersController(UserAccountService userAccountService, UserAccountMapper userAccountMapper) {
        this.userAccountService = userAccountService;
        this.userAccountMapper = userAccountMapper;
    }

    @GetMapping("all")
    public ResponseEntity<?> getAllUserWithPagination(HttpServletRequest request){
        request.getQueryString();
        List<UserAccount> userAccounts = userAccountService.getAllByPage();
        return ResponseEntity.ok(userAccounts);
    }
    @GetMapping("id/{id}")
    public ResponseEntity<?> getUserById(@PathVariable Long id){
        Optional<UserAccount> userAccount = userAccountService.getUserById(id);
        if(userAccount.isEmpty()){
            return new AppResponseErrorDto(HttpStatus.NOT_FOUND,"Не найден аккаунт с id: "+id).getResponseEntity();
        }
        return ResponseEntity.ok(userAccountMapper.entityToGetByIdDto(userAccount.get()));
    }
}
