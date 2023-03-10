package alexey.grizly.com.users.mappers;

import alexey.grizly.com.users.dto.response.UserAccountGetByIdResponseDto;
import alexey.grizly.com.users.entities.UserAccount;
import org.mapstruct.Mapper;



@Mapper(componentModel = "spring")
public interface UserAccountMapper {
    UserAccountGetByIdResponseDto entityToGetByIdDto(UserAccount userAccount);
}
