package alexey.grizly.com.users.entities;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;
@Getter
@Setter
@Table(name = "roles")
public class AppRole {
    @Id
    private Long id;
    @Column("name")
    private String name;
    @Column("description")
    private String description;


}
