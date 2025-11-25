This page explains how to perform molecular docking using [AutoDock4](https://autodock.scripps.edu/), [Vina](https://vina.scripps.edu/), and [Vinardo](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0155183) on [BOINC Central](https://boinc.berkeley.edu/central/).

We describe a web-based job submission interface.
For Vina, you can also use [Raccoon2](Submitting-Vina-Jobs-using-Raccoon2).

## Setting Up BOINC Central for Molecular Docking
- **Create an Account**: Visit the [BOINC Central website](https://boinc.berkeley.edu/central/signup.php) and create a free account.
This will allow you to access the platform and submit your molecular docking tasks.
You will be asked to provide some additional information, such as the research you are doing, that allows us to filter out spam accounts.
Every request is manually reviewed, so please be patient if your account is not approved immediately.
- **Select a molecular docking application**: After logging in, navigate to the ["Job submission"](https://boinc.berkeley.edu/central/submit.php) section and select one of the available molecular docking applications: AutoDock4, Vina, or Vinardo.
Each application has its own strengths and is suitable for different types of docking tasks.
<p align="center">
  <img src="images/submit.jobs.png" alt="Submit jobs on BOINC Central"/>
</p>

## Batches of jobs

BOINC Central is designed to run 'batches' of jobs.
A batch can contain a single job, or thousands of jobs.

You submit docking jobs to BOINC Central in batches.
For each submission, you supply two directories of files:

* A directory of 'ligand' files
* A directory of 'receptor' (or in the case of Autodock4, 'map') files.

A job is created for each combination of a ligand file and a receptor file.

## Submitting AutoDock4 jobs

**Watch the video tutorial**
<p align="center">
  <iframe allowfullscreen="" class="BLOG_video_class" height="416" src="https://www.youtube.com/embed/NJ8sxnipMUs" width="501" youtube-src-id="NJ8sxnipMUs"/></iframe>
</p>

- **Prepare Input Files**: Prepare a zip archive with receptor maps and a zip archive with ligand files.
The receptor maps should be in the format required by AutoDock4:
for each map, a .pdbqt file,
and possibly additional files ('.map', '.glg', '.gpf', '.fld', '.xyz')
with the same base name.
The ligand files should be in PDBQT format.
Example .zip files:

[Receptor maps](https://github.com/BOINC/boinc-autodock-vina/wiki/samples/ad4/ad4_receptor_maps.zip)

[Ligand files](https://github.com/BOINC/boinc-autodock-vina/wiki/samples/ad4/ad4_ligand.zip)

  <p align="center">
    <img src="images/ad4_input_files.png" alt="Input files for AutoDock4"/>
  </p>
- **Upload Input Files**: In the ["Job submission"->"File sandbox"](https://boinc.berkeley.edu/central/sandbox.php) section, upload zip files containing your receptor maps and ligand files.
- **Submit the Job**: Go to the ["Job submission"->"Submit jobs"](https://boinc.berkeley.edu/central/submit.php) section, select AutoDock, and fill in the required fields:
- **Maps**: Select the zip file containing your receptor maps.
- **Ligands**: Select the zip file containing your ligand files.

All other fields can be left as default. Click the "OK" button to start the docking job.
<p align="center">
  <img src="images/ad4_submit_page.png" alt="Submit AutoDock4 job on BOINC Central"/>
</p>

## Submitting a Vina Job

**Watch the video tutorial**
<p align="center">
  <iframe allowfullscreen="" class="BLOG_video_class" height="416" src="https://www.youtube.com/embed/ypBh-Sw_jTg"
    width="501" youtube-src-id="ypBh-Sw_jTg"/></iframe>
</p>

- **Prepare Input Files**: Prepare a zip archive with receptor maps and a zip archive with ligand files.
The receptor maps should be in the format required by Vina,
and the ligand files should be in PDBQT format.
Here are the example files you can use:

[Receptor maps](https://github.com/BOINC/boinc-autodock-vina/wiki/samples/vina/vina_receptor.zip)

[Ligand files](https://github.com/BOINC/boinc-autodock-vina/wiki/samples/vina/vina_ligand.zip)

  <p align="center">
    <img src="images/vina_input_files.png" alt="Input files for Vina"/>
  </p>


- **Upload Input Files**: In the ["Job submission"->"File sandbox"](https://boinc.berkeley.edu/central/sandbox.php) section,
upload zip files containing your receptor and ligand files.
- **Submit the Job**: Go to the ["Job submission"->"Submit jobs"](https://boinc.berkeley.edu/central/submit.php) section,
select Vina, and fill in the required fields:
- **Receptor**: Select the zip file containing your receptor maps.
- **Ligands**: Select the zip file containing your ligand files.
- **Center**: Specify the center of the docking box (Angstrom) in the format `x,y,z` (e.g., `0,0,0`).
- **Size**: Specify the size of the docking box (Angstrom) in the format `x,y,z` (e.g., `20,20,20`).

All other fields can be left as default.
Click the "OK" button to start the docking job.
<p align="center">
  <img src="images/vina_submit_page.png" alt="Submit Vina job on BOINC Central"/>
</p>

## Submitting a Vinardo Job

**Watch the video tutorial**
<p align="center">
  <iframe allowfullscreen="" class="BLOG_video_class" height="416" src="https://www.youtube.com/embed/dGiZbEje-Ok"
    width="501" youtube-src-id="dGiZbEje-Ok"/></iframe>
</p>

- **Prepare Input Files**: Prepare zip archive with receptor maps and zip archive with ligand files.
The receptor maps should be in the format required by Vinardo, and the ligand files should be in PDBQT format.
Here are the example files you can use:

[Receptor maps](https://github.com/BOINC/boinc-autodock-vina/wiki/samples/vinardo/vinardo_receptor.zip)

[Ligand files](https://github.com/BOINC/boinc-autodock-vina/wiki/samples/vinardo/vinardo_ligand.zip)

  <p align="center">
    <img src="images/vinardo_input_files.png" alt="Input files for Vinardo"/>
  </p>

- **Upload Input Files**: In the ["Job submission"->"File sandbox"](https://boinc.berkeley.edu/central/sandbox.php) section, upload zip files containing your receptor and ligand files.
- **Submit the Job**: Go to the ["Job submission"->"Submit jobs"](https://boinc.berkeley.edu/central/submit.php) section, select Vinardo, and fill in the required fields:
- **Receptor**: Select the zip file containing your receptor maps.
- **Ligands**: Select the zip file containing your ligand files.
- **Center**: Specify the center of the docking box (Angstrom) in the format `x,y,z` (e.g., `0,0,0`).
- **Size**: Specify the size of the docking box (Angstrom) in the format `x,y,z` (e.g., `20,20,20`).

All other fields can be left as default.
Click the "OK" button to start the docking job.

   <p align="center">
     <img src="images/vinardo_submit_page.png" alt="Submit Vinardo job on BOINC Central"/>
   </p>

## Review Submitted Jobs
After submitting your jobs,
you can monitor their progress in the ["Job submission->Job status"](https://boinc.berkeley.edu/central/submit.php?action=status) section.
Here, you can see the status of your jobs,
including whether they are running, completed, or failed.
You can also view the results of completed jobs and download the output files.
After you got the results and saved them locally, you can retire the batch.
This will remove the batch and all jobs within it, including the results.
<p align="center">
  <img src="images/job_status.png" alt="Job status on BOINC Central"/>
</p>

## Submitting Vina Jobs using Raccoon2

If you prefer to use a graphical interface for submitting Vina jobs,
you can use [Raccoon2](https://autodock.scripps.edu/resources/raccoon2/).
Raccoon2 is a user-friendly tool that simplifies the process
of preparing and reviewing Vina receptors and ligands.
Raccoon2 does not support submitting jobs to BOINC Central directly,
but for your convenience we have made a plugin that allows you to submit Vina jobs to BOINC Central directly from Raccoon2.
You can find the plugin [here](https://github.com/BOINC/Raccoon2_BOINC_Plugin).

**Watch the video tutorial**
<p align="center">
  <iframe allowfullscreen="" class="BLOG_video_class" height="416" src="https://www.youtube.com/embed/g7jago5-TvU"
    width="501" youtube-src-id="g7jago5-TvU"/></iframe>
</p>

### Installation
To install the plugin, you need to have Raccoon2 1.5.7 installed
(could be taken from [here](https://ccsb.scripps.edu/mgltools/downloads/))
and plugin downloaded from the
[releases](https://github.com/BOINC/Raccoon2_BOINC_Plugin/releases/tag/v1.0.4)

Then, navigate to the `MGLTOOLS_FOLDER` folder,
and put `raccoon2_boinc_installer.py` there,
where `MGLTOOLS_FOLDER` is the folder where MGLTools is installed.

Finally, you can install the plugin using the following command:

#### Linux/Mac:

```bash
./bin/pythonsh raccoon2_boinc_installer.py install
```

#### Windows:
Before running the command, you need to start `cmd` as an administrator,
then navigate to the `MGLTOOLS_FOLDER` folder.

```bash
python.exe raccoon2_boinc_installer.py install
```

where `MGLTOOLS_FOLDER` is the folder where MGLTools is installed.

### Usage
- **Open Raccoon2**: Launch Raccoon2 and authenticate with your BOINC Central account.
<p align="center">
  <img src="https://github.com/BOINC/Raccoon2_BOINC_Plugin/raw/master/plugin.png" alt="Raccoon2 with BOINC Central plugin installed"/>
</p>

- **Prepare Ligands**: You can use the sample ligands provided [here](https://github.com/BOINC/boinc-autodock-vina/wiki/samples/raccoon2/1iep_ligand.zip).
<p align="center">
  <img src="images/raccoon2_ligands.png" alt="Raccoon2 ligand preparation"/>
</p>

- **Prepare Receptors**: You can use the sample receptors provided [here](https://github.com/BOINC/boinc-autodock-vina/wiki/samples/raccoon2/1iep_receptor.zip).
<p align="center">
  <img src="images/raccoon2_receptors.png" alt="Raccoon2 receptor preparation"/>
</p>

- **Configure Docking Parameters**: Set the docking parameters, such as the center and size of the docking box.
<p align="center">
  <img src="images/raccoon2_config.png" alt="Raccoon2 docking parameters"/>
</p>

- **Submit Job**: Click the "Submit" button on the Job manager tab to submit the job to BOINC Central.
All your submitted jobs will be listed in the Job manager tab,
and you can monitor their status.
<p align="center">
  <img src="images/raccoon2_job_manager.png" alt="Raccoon2 job submission page to BOINC Central"/>
</p>

- **Review Results**: After the job is completed,
you can download the results from the Job manager tab in Raccoon2 and review them later on the Analysis tab.
<p align="center">
  <img src="images/raccoon2_analysis.png" alt="Raccoon2 job results analysis"/>
</p>

## Contact
If you have any questions or need assistance with BOINC Central,
you can contact us via the
[BOINC Central forum](https://boinc.berkeley.edu/central/forum_index.php)
or by [email](https://boinc.berkeley.edu/anderson/).
In case of any issues,
please report them on the
[GitHub repository](https://github.com/BOINC/boinc-apps/issues).
