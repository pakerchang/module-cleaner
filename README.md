## Module Cleaner

Module Cleaner is a script that helps you find all the `node_modules` directories under the execution path and gives you the option to delete them.

### Installation

You can install Module Cleaner using npm or yarn by running the following command:

```shell
npm install -g @pakerzhang/module-cleaner
```

or

```shell
yarn global add @pakerzhang/module-cleaner
```

### Usage

1. Open the terminal and navigate to the desired path where you want to search for `node_modules` directories.

2. Execute the `module-cleaner` command:

```shell
module-cleaner
```

3. Module Cleaner will display a list of `node_modules` directories found within the execution path.

4. You will be prompted to confirm whether you want to delete the `node_modules` directories. Choose "Yes" or "No" accordingly.

### Example

Here's an example of how to use Module Cleaner:

```shell
$ cd /path/to/project
$ module-cleaner
```

Module Cleaner will search for `node_modules` directories under the `/path/to/project` directory and present you with the option to delete them.

### License

Module Cleaner is released under the [MIT License](https://opensource.org/licenses/MIT).
