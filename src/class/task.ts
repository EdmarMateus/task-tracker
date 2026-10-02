export class task
{
	static nTask: number = 0;
	id: number = 0;
	description: string = '';
	status: string = '';
	createdAt: string = '';
	updatedAt: string = '';

	constructor(id: number, description: string, status: string, createdAt: string, updatedAt: string)
	{
		this.id = id;
		this.description = description;
		this.status = status;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}
};