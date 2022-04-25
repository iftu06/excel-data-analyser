interface IMapper {
    _id: string,
    modelName: string,
    mapperName: string,
    modelContent: Map<string, string>
}

export default IMapper;