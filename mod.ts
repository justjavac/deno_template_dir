/** Returns the path to the user's template directory.
 *
 * The returned value depends on the operating system and is either a string,
 * containing a value from the following table, or `null`.
 * 
 * |Platform | Value                  | Example                                                        |
 * | ------- | ---------------------- | -------------------------------------------------------------- |
 * | Linux   | `XDG_TEMPLATES_DIR`    | /home/justjavac/Templates                                      |
 * | macOS   | –                      | –                                                              |
 * | Windows | `{FOLDERID_Templates}` | C:\Users\justjavac\AppData\Roaming\Microsoft\Windows\Templates |
 */
export default function templateDir(): string | null {
  switch (Deno.build.os) {
    case "linux":
      return Deno.env.get("XDG_TEMPLATES_DIR") ?? null;
    case "windows":
      return Deno.env.get("FOLDERID_Templates") ?? null;
  }

  return null;
}
