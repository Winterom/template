package alexey.grizly.com.users.entities;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;
@Getter
@Setter
@Table("users_roles")
public class UsersRoles {
    @Id
    private Long id;
    @Column("user_id")
    private Long userId;
    @Column("role_id")
    private Long roleId;
}
