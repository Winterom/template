package alexey.grizly.com.users.repositories;

import alexey.grizly.com.users.entities.AppUser;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<AppUser,Long> {

}
