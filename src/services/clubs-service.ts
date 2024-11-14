import * as HttResponse from '..//utils/http-helper';
import * as repository from '../repositories/clubs-repository';

export const getClubService = async () => {
    const data = await repository.findAllClubs();
    const response = HttResponse.ok(data);

    return response;
};
