package alexey.grizly.com.users.repositories;


import alexey.grizly.com.users.entities.UserAccount;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends org.springframework.data.repository.Repository<UserAccount,Long> {
    @Query("SELECT * FROM users as u WHERE u.id=:id")
    Optional<UserAccount> getById (@Param("id")Long id);

    @Query("SELECT u,r FROM users as u left join users_roles ur on u.id = ur.user_id left join roles r on ur.role_id = r.id")
    Optional<UserAccount> geByIdWithRoles(@Param("id")Long id);

    @Query("SELECT * FROM users")
    List<UserAccount> getAllUserAccounts();
}
