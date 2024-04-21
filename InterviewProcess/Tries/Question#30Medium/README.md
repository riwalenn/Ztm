Implement a trie with insert, search and startsWith methods.
interface Trie {
    void insert(String word);
    Boolean search(String word);
    Boolean startsWith(String prefix);
}

### Step 1 : Verify the constraints
- Can we implement helper classes/objects ? Yes, you can use any features you see fit.

### Step 2 : Write some tests cases
insert('apple');
search('dog'); // false
insert('dog');
search('dog'); // true
startsWith('app'); // true
search('app'); // false
insert('app');
search('app'); // true

### Step 4 : Write out our solution in code
checking Solution file 