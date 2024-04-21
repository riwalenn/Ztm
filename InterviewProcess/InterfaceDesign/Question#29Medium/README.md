Given the following interface, implements its methods.
interface Monarchy {
    void birth(String child, String parent);
    void death(String name);
    List<String> getOrderOfSuccession();
}

               Jake  
            /    |  \
           /     |   \
     Catherine  Tom  Celine
       /    \           |
     Jane   Marc       Peter
      |
    Farah

### Step 1 : Verify the constraints
- Can we implement helper classes/objects ? Yes, you can use any features you see fit.

### Step 2 : Write some tests cases
new Monarchy('Jake');
birth('catherine', 'jack');
birth('Jane', 'catherine');
birth('Farah', 'Jane');
birth('Tom', 'jack');
birth('Celine', 'jack');
birth('Marc', 'catherine');
birth('Peter', 'Celine');
getOrderOfSuccession();
['Jack', 'Catherine', 'Jane', 'Farah', 'Marc', 'Tom', 'Celine', 'Peter']
death('Jack');
death('Jane');
getOrderOfSuccession();
['Catherine', 'Farah', 'Marc', 'Tom', 'Celine', 'Peter']

### Step 4 : Write out our solution in code
checking Solution file 