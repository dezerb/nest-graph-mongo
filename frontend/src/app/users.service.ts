import { Injectable } from '@angular/core';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private usesQuery: QueryRef<{ filter: User[] }, { name: string }>;

  constructor(private apollo: Apollo) {
    this.usesQuery = this.apollo.watchQuery({
      query: gql`
        query users($name: String) {
          filter(name: $name) {
            name
            lastName
            age
            articles(populate: true) {
              name
              content
            }
          }
        }
      `,
    });
  }

  async getUsers(name: string): Promise<User[]> {
    const result = await this.usesQuery.refetch({ name });
    return result.data.filter;
  }
}
