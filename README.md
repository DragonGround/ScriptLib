Example code for packaging ScriptLib:

```cs
using System;
using System.IO;
using ICSharpCode.SharpZipLib.GZip;
using ICSharpCode.SharpZipLib.Tar;
using NaughtyAttributes;
using OneJS;
using OneJS.Utils;
using UnityEngine;
using UnityEngine.Serialization;

namespace OneJSContainer {
    public class Packager : MonoBehaviour {
        [SerializeField] TextAsset _scriptLibZip;

#if UNITY_EDITOR

        [Button("Package ScriptLib")]
        void PackageScriptLib() {
            var t = DateTime.Now;
            var scriptLibPath = Path.Combine(ScriptEngine.WorkingDir, "ScriptLib");

            if (_scriptLibZip == null) {
                UnityEditor.EditorUtility.DisplayDialog("ScriptLib Zip is null",
                    "Please make sure you have a ScriptLib Zip (Text Asset) selected", "Okay");
                return;
            }
            if (UnityEditor.EditorUtility.DisplayDialog("Are you sure?",
                "This will package up your ScriptLib folder under ScriptEngine.WorkingDir into a zip file " +
                "and override your choosen ScriptLib Zip file.",
                "Confirm", "Cancel")) {
                var binPath = UnityEditor.AssetDatabase.GetAssetPath(_scriptLibZip);
                binPath = Path.GetFullPath(Path.Combine(Application.dataPath, @".." + Path.DirectorySeparatorChar,
                    binPath));
                var outStream = File.Create(binPath);
                var gzoStream = new GZipOutputStream(outStream);
                gzoStream.SetLevel(3);
                var tarOutputStream = new TarOutputStream(gzoStream);
                var tarCreator = new TarCreator(scriptLibPath) { ExcludeTS = true, UglifyJS = true };
                tarCreator.CreateTar(tarOutputStream);

                Debug.Log(
                    $"ScriptLib Zip updated. {tarOutputStream.Length} bytes {(DateTime.Now - t).TotalMilliseconds}ms");
                tarOutputStream.Close();
            }
        }
#endif
    }
}
```