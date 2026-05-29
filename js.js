// 1. Loops

// Flatten a deeply nested array without flat()

const nested = [1, [2, [3, [4, [5]]]]];
function flattenDeep(arr) {
  const stack = [...arr];
  const results = [];
  while (stack.length) {
    const next = stack.pop();
    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      results.unshift(next);
    }
  }
  return results;
}
console.log(flattenDeep(nested));



// Print a spiral matrix

function spiralMatrix(n) {
    const matrix = Array.from({ length: n }, () => Array(n).fill(0));
    let num = 1;
    let top = 0, bottom = n - 1, left = 0, right = n - 1;
    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) {
          matrix[top][i] = num++;
        }
        top++;
        for (let i = top; i <= bottom; i++) {
          matrix[i][right] = num++;
        }
        right--;
        if (top <= bottom) {
          for (let i = right; i >= left; i--) {
            matrix[bottom][i] = num++;
          }
          bottom--;
        }
        if (left <= right) {
          for (let i = bottom; i >= top; i--) {
            matrix[i][left] = num++;
          }
          left++;
        }
    }
    return matrix;
}
const results = spiralMatrix(3);
results.forEach(row => console.log(row.join(" ")));



// Sequential async loop (no Promise.all)

const ids = [1, 2, 3, 4, 5];
async function fetchUsers() {
    for (const id of ids) {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await res.json();
        console.log(data);
    }
}
fetchUsers();



// 3. Arrays

// Group array of objects by key

function groupBy(arr, key) {
    return arr.reduce((acc, obj) => {
        const val = obj[key];
        if (!acc[val]) acc[val] = [];
        acc[val].push(obj);
        return acc;
    }, {});
}
const people = [
    { name: 'Ali', city: 'HYD' },
    { name: 'Sara', city: 'MUM' },
    { name: 'Raj', city: 'HYD' },
];
console.log(groupBy(people, 'city'));



// Find all subarrays that sum to K

function subarraySum(arr, k) {
    let map = new Map();
    let sum = 0, res = [];
    map.set(0, [-1]);
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (map.has(sum - k)) {
            for (let start of map.get(sum - k)) {
                res.push(arr.slice(start + 1, i + 1));
            }
        }
        if (!map.has(sum)) map.set(sum, []);
        map.get(sum).push(i);
    }
    return res;
}
console.log(subarraySum([1, 2, 3, 0, 3], 3));



// Implement Array.prototype.reduce() from scratch

Array.prototype.myReduce = function(callbackFn, initialValue) {
    if (this == null) throw new TypeError('Array.prototype.myReduce called on null or undefined');
    if (typeof callbackFn !== 'function') throw new TypeError(callbackFn + ' is not a function');
    const O = Object(this);
    const len = O.length >>> 0;
    let k = 0;
    let accumulator;
    if (arguments.length >= 2) {
        accumulator = initialValue;
    } else {
        while (k < len && !(k in O)) {
            k++;
        }
        if (k >= len) {
            throw new TypeError('Reduce of empty array with no initial value');
        }
        accumulator = O[k++];
    }
    while (k < len) {
        if (k in O) {
            accumulator = callbackFn(accumulator, O[k], k, O);
        }
        k++;
    }
    return accumulator;
};
console.log([1, 2, 3].myReduce((acc, x) => acc + x)); 
console.log([].myReduce((a, b) => a + b, 0));



// 4. Objects

// Deep clone without JSON.parse

function deepClone(obj, map = new WeakMap()) {
    if (obj === null || typeof obj !== 'object') return obj;
    if (map.has(obj)) return map.get(obj);
    let clone;
    if (obj instanceof Date) clone = new Date(obj);
    else if (obj instanceof Map) {
        clone = new Map();
        map.set(obj, clone);
        obj.forEach((v, k) => clone.set(deepClone(k, map), deepClone(v, map)));
        return clone;
    } else if (obj instanceof Set) {
        clone = new Set();
        map.set(obj, clone);
        obj.forEach(v => clone.add(deepClone(v, map)));
        return clone;
    } else if (Array.isArray(obj)) clone = [];
    else clone = {};
    map.set(obj, clone);
    for (let key in obj) {
        clone[key] = deepClone(obj[key], map);
    }
    return clone;
}
const obj = {
    a: 1,
    b: { c: new Date(), d: new Set([1, 2]) },
    circular: null
};
obj.circular = obj;
const clone = deepClone(obj);
console.log(clone);



// Deep diff two objects

function deepDiff(a, b) {
    const result = {};
    const keys = new Set([...Object.keys(a), ...Object.keys(b)]);
    for (const key of keys) {
        if (!(key in a)) {
            result[key] = { added: b[key] };
        } else if (!(key in b)) {
            result[key] = { removed: a[key] };
        } else if (typeof a[key] === 'object' && typeof b[key] === 'object' && a[key] && b[key]) {
            const diff = deepDiff(a[key], b[key]);
            if (Object.keys(diff).length) result[key] = diff;
        } else if (a[key] !== b[key]) {
            result[key] = { from: a[key], to: b[key] };
        }
    }
    return result;
}
console.log(deepDiff({ x: 1, y: { z: 2 } }, { x: 1, y: { z: 3 }, w: 4 }));



// Flatten and unflatten nested objects

function flatten(obj, prefix = '', res = {}) {
    for (const key in obj) {
        const val = obj[key];
        const newKey = prefix ? `${prefix}.${key}` : key;
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
            flatten(val, newKey, res);
        } else {
            res[newKey] = val;
        }
    }
    return res;
}
function unflatten(obj) {
    const result = {};
    for (const key in obj) {
        const parts = key.split('.');
        let cur = result;
        for (let i = 0; i < parts.length - 1; i++) {
            if (!(parts[i] in cur)) cur[parts[i]] = {};
            cur = cur[parts[i]];
        }
        cur[parts[parts.length - 1]] = obj[key];
    }
    return result;
}
console.log(flatten({ a: { b: { c: 1 } } }));
console.log(unflatten({ 'a.b.c': 1 }));



// 5. Fetch + APIs

// Fetch with retry + exponential backoff

async function fetchWithRetry(url, options = { retries: 3 }) {
    let delay = 500;
    for (let i = 0; i < options.retries; i++) {
        try {
            const res = await fetch(url);
            if (!res.ok) throw new Error('HTTP error');
            return res;
        } catch (err) {
            if (i === options.retries - 1) throw err;
            await new Promise(r => setTimeout(r, delay));
            delay *= 2;
        }
    }
}
fetchWithRetry('https://jsonplaceholder.typicode.com/posts', { retries: 3 })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err.message));



// Race fetch against a timeout

function fetchWithTimeout(url, ms) {
    return Promise.race([
        fetch(url),
        new Promise((_, reject) =>
            setTimeout(() => reject(new Error('Request timed out')), ms)
        )
    ]);
}
fetchWithTimeout('https://jsonplaceholder.typicode.com/posts', 3000)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err.message));



// Paginate and collect all results

async function fetchAllPages(url) {
    let results = [];
    let page = 1;
    let totalPages = 1;
    while (page <= totalPages) {
        const response = await fetch(`${url}?page=${page}`);
        const json = await response.json();
        results = results.concat(json.data);
        totalPages = json.total_pages;
        page++;
    }
    return results;
}
fetchAllPages('https://reqres.in/api/users?page=1')
    .then(data => console.log(data))
    .catch(err => console.log(err));



// 6. Local // Session Storage

// localStorage with TTL (expiry)

const storage = {
    setItem(key, value, ttl) {
        const item = { value, expiry: Date.now() + ttl };
        localStorage.setItem(key, JSON.stringify(item));
    },
    getItem(key) {
        const itemStr = localStorage.getItem(key);
        if (!itemStr) return null;
        const item = JSON.parse(itemStr);
        if (Date.now() > item.expiry) {
            localStorage.removeItem(key);
            return null;
        }
        return item.value;
    }
};
storage.setItem('token', 'abc123', 60000);
console.log(storage.getItem('token'));



// Cross-tab state sync via localStorage

const key = 'counter';
function getCount() {
    return parseInt(localStorage.getItem(key)) || 0;
}
function setCount(value) {
    localStorage.setItem(key, value);
}
function increment() {
    let value = getCount() + 1;
    setCount(value);
    console.log('Updated in this tab:', value);
}
window.addEventListener('storage', (e) => {
    if (e.key === key) {
        console.log('Synced from another tab:', parseInt(e.newValue));
    }
});
console.log('Initial value:', getCount());
increment();
increment();



// sessionStorage shopping cart

const scart = {
    key: 'scart',
    _get() {
        return JSON.parse(sessionStorage.getItem(this.key)) || [];
    },
    _set(data) {
        sessionStorage.setItem(this.key, JSON.stringify(data));
    },
    add(item) {
        let scart = this._get();
        let existing = scart.find(i => i.id === item.id);
        if (existing) {
            existing.qty += 1;
        } else {
            scart.push({ ...item, qty: 1 });
        }
        this._set(scart);
    },
    remove(id) {
        let scart = this._get().filter(i => i.id !== id);
        this._set(scart);
    },
    update(id, qty) {
        let scart = this._get();
        let item = scart.find(i => i.id === id);
        if (item) {
            item.qty = qty;
        }
        this._set(scart);
    },
    total() {
        return this._get().reduce((sum, item) => sum + item.price * item.qty, 0);
    },
    getAll() {
        return this._get();
    }
};
scart.add({ id: 1, name: 'Shirt', price: 499 });
scart.add({ id: 1, name: 'Shirt', price: 499 });
scart.remove(1);
console.log(scart.total());
console.log(scart.getAll());



// 7. Strings

// Longest palindromic substring

function longestPalindrome(s) {
    let start = 0, end = 0;
    function expand(l, r) {
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            l--;
            r++;
        }
        return r - l - 1;
    }
    for (let i = 0; i < s.length; i++) {
        let len1 = expand(i, i);
        let len2 = expand(i, i + 1);
        let len = Math.max(len1, len2);
        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }
    return s.substring(start, end + 1);
}
console.log(longestPalindrome('dad'));
console.log(longestPalindrome('mom'));
console.log(longestPalindrome('madam'));



// Implement a template literal engine

function render(template, data) {
    return template.replace(/{{(.*?)}}/g, function(match, key) {
        key = key.trim();
        return key in data ? data[key] : `[missing:${key}]`;
    });
}
let result1 = render(
    'Hello {{name}}, you have {{count}} messages',
    { name: 'Sasank', count: 5 }
);
console.log(result1);
let result2 = render(
    'Hi {{name}}, age {{age}}',
    { name: 'Shashank' }
);
console.log(result2);
let result3 = render(
    'User: {{name}}, Messages: {{count}}, City: {{city}}',
    { name: 'Chenchu', count: 10 }
);
console.log(result3);



// Anagram grouping

function groupAnagrams(words) {
    const map = {};
    for (let word of words) {
        let sorted = word.split('').sort().join('');
        if (!map[sorted]) {
            map[sorted] = [];
        }
        map[sorted].push(word);
    }
    return Object.values(map);
}
const result = groupAnagrams(['eat','tea','tan','ate','nat','bat']);
console.log(result);