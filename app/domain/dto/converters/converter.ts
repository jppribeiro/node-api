export interface Converter<Domain, Dto> {
    toDomain(dto: Dto): Domain;
    toDto(entity: Domain): Dto;
}