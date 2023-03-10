package alexey.grizly.com.users.service;

import alexey.grizly.com.users.entities.UserAccount;
import alexey.grizly.com.users.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserAccountService {
    private final UserRepository userRepository;

    @Autowired
    public UserAccountService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<UserAccount> getAllByPage(){
        return userRepository.getAllUserAccounts();
    }
    public Optional<UserAccount> getUserById(Long id){
        if(id==null){
            return Optional.empty();
        }
        return userRepository.getById(id);
    }
    public Optional<UserAccount> getUserByIdWithRoles(Long id){
        if(id==null){
            return Optional.empty();
        }
        return userRepository.geByIdWithRoles(id);
    }
}
