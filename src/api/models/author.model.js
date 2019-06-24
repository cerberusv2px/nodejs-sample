import bookshelf from '../../database/database';
import dbConst from '../../database/constants';

class Author extends bookshelf.Model {
  get tableName() {
    return dbConst.table_name.TBL_AUTHORS;
  }

  get hasTimestamps() {
    return true;
  }
}

export default Author;
